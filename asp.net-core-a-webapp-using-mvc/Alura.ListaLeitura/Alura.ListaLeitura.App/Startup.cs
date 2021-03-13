using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Alura.ListaLeitura.App.Negocio;
using Alura.ListaLeitura.App.Repositorio;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;

namespace Alura.ListaLeitura.App
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRouting();
        }

        public void Configure(IApplicationBuilder app)
        {
            var builder = new RouteBuilder(app);
            builder.MapRoute("Books/ToRead", BooksToRead);
            builder.MapRoute("Books/Reading", BooksReading);
            builder.MapRoute("Books/Read", BooksRead);
            builder.MapRoute("Register/NewBook/{name}/{author}", NewBookToRead);
            builder.MapRoute("Books/Details/{id:int}", ShowDetail);
            builder.MapRoute("Register/NewBook", ShowForm);
            builder.MapRoute("Register/Add", ProcessForm);
            var routes = builder.Build();
            app.UseRouter(routes);
        }

        private Task ProcessForm(HttpContext context)
        {
            var book = new Livro()
            {
                Titulo = context.Request.Form["name"].First(),
                Autor = context.Request.Form["author"].First(),
            };

            var _repo = new LivroRepositorioCSV();
            _repo.Incluir(book);
            return context.Response.WriteAsync("Registered book successfully");
        }

        private Task ShowForm(HttpContext context)
        {
            var html = LoadHTMLFile("form");

            return context.Response.WriteAsync(html);
        }

        private string LoadHTMLFile(string fileName)
        {
            var fullNameFile = $"HTML/{fileName}.html";

            using (var file = File.OpenText(fullNameFile))
            {
                return file.ReadToEnd();
            }
        }

        public Task Routing(HttpContext context)
        {
            var _repo = new LivroRepositorioCSV();
            var paths = new Dictionary<string, RequestDelegate>
            {
                {"/Books/ToRead",BooksToRead},
                {"/Books/Reading",BooksReading},
                {"/Books/Read",BooksRead}
            };

            if (paths.ContainsKey(context.Request.Path))
            {
                var method = paths[context.Request.Path];
                return method.Invoke(context);
            }

            context.Response.StatusCode = 404;
            return context.Response.WriteAsync("Path is not found");
        }

        public Task BooksToRead(HttpContext context)
        {
            var html = LoadHTMLFile("list");
            var _repo = new LivroRepositorioCSV();

            foreach (var book in _repo.ParaLer.Livros)
            {
                html = html.Replace("#NEW-ITEM#", $"<li>{book.Titulo} - {book.Autor}</li>#NEW-ITEM#");
            }
            html = html.Replace("#NEW-ITEM#", "");
            return context.Response.WriteAsync(html);
        }
        public Task BooksReading(HttpContext context)
        {
            var html = LoadHTMLFile("list");
            var _repo = new LivroRepositorioCSV();

            foreach (var book in _repo.Lendo.Livros)
            {
                html = html.Replace("#NEW-ITEM#", $"<li>{book.Titulo} - {book.Autor}</li>#NEW-ITEM#");
            }
            html = html.Replace("#NEW-ITEM#", "");
            return context.Response.WriteAsync(html);
        }
        public Task BooksRead(HttpContext context)
        {
            var html = LoadHTMLFile("list");

            var _repo = new LivroRepositorioCSV();

            foreach (var book in _repo.Lidos.Livros)
            {
                html = html.Replace("#NEW-ITEM#", $"<li>{book.Titulo} - {book.Autor}</li>#NEW-ITEM#");
            }
            html = html.Replace("#NEW-ITEM#", "");
            return context.Response.WriteAsync(html);
        }

        public Task NewBookToRead(HttpContext context)
        {
            var book = new Livro()
            {
                Titulo = context.GetRouteValue("name").ToString(),
                Autor = context.GetRouteValue("author").ToString(),
            };

            var _repo = new LivroRepositorioCSV();
            _repo.Incluir(book);
            return context.Response.WriteAsync("Registered book successfully");
        }
        private Task ShowDetail(HttpContext context)
        {
            int id = Convert.ToInt32(context.GetRouteValue("id"));
            var _repo = new LivroRepositorioCSV();
            var book = _repo.Todos.FirstOrDefault(b => b.Id == id);
            return context.Response.WriteAsync(book.ToString());
        }
    }
}