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
            var paths = new Dictionary<string, string>
            {
                {"/Books/ToRead",_repo.ParaLer.ToString()},
                {"/Books/Reading",_repo.Lendo.ToString()},
                {"/Books/Read",_repo.Lidos.ToString()}
            };

            if (paths.ContainsKey(context.Request.Path))
            {
                return context.Response.WriteAsync(paths[context.Request.Path]);
            }

            context.Response.StatusCode = 404;
            return context.Response.WriteAsync("Path is not found");
        }

        public Task BooksToRead(HttpContext context)
        {
            var _repo = new LivroRepositorioCSV();
            return context.Response.WriteAsync(_repo.ParaLer.ToString());
        }
    }
}