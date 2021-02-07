using System.Collections.Generic;
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
            var routes = builder.Build();
            app.UseRouter(routes);
            // app.Run(Routing);
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
            var book = new Livro(){
                Titulo = context.GetRouteValue("name").ToString(),
                Autor =context.GetRouteValue("author").ToString(),    
            };
            
            var _repo = new LivroRepositorioCSV();
            _repo.Incluir(book);
            return context.Response.WriteAsync("Registered book successfully");
        }
    }
}