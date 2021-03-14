using System.Linq;
using System.Threading.Tasks;
using Alura.ListaLeitura.App.HTML;
using Alura.ListaLeitura.App.Negocio;
using Alura.ListaLeitura.App.Repositorio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

namespace Alura.ListaLeitura.App.Logic
{
    public class RegisterController
    {     
        
        public static Task Insert(HttpContext context)
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

        public static Task ShowForm(HttpContext context)
        {
            var html = HtmlUtils.LoadHTMLFile("form");

            return context.Response.WriteAsync(html);
        }

        public static Task NewBook(HttpContext context)
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
    }
    
}