using System;
using System.Collections.Generic;
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
            // app.Run(Routing);
        }

        private Task ProcessForm(HttpContext context)
        {
             var book = new Livro()
            {
                Titulo = context.Request.Query["name"].First(),
                Autor = context.Request.Query["author"].First(),
            };

            var _repo = new LivroRepositorioCSV();
            _repo.Incluir(book);
            return context.Response.WriteAsync("Registered book successfully");
        }

        private Task ShowForm(HttpContext context)
        {
            var html = @"
            <html>
            <form action='/Register/Add'>
                <input name='name'/>
                <input name='author'/>
                <button>Salve</button>
            </form>
            </html>
            ";

            return context.Response.WriteAsync(html);
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
            var _repo = new LivroRepositorioCSV();
            return context.Response.WriteAsync(_repo.ParaLer.ToString());
        }
        public Task BooksReading(HttpContext context)
        {
            var _repo = new LivroRepositorioCSV();
            return context.Response.WriteAsync(_repo.Lendo.ToString());
        }
        public Task BooksRead(HttpContext context)
        {
            var _repo = new LivroRepositorioCSV();
            return context.Response.WriteAsync(_repo.Lidos.ToString());
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