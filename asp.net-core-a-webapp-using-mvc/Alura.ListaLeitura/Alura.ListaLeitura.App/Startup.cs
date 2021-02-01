using System.Collections.Generic;
using System.Threading.Tasks;
using Alura.ListaLeitura.App.Repositorio;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace Alura.ListaLeitura.App
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            app.Run(Routing);
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
    }
}