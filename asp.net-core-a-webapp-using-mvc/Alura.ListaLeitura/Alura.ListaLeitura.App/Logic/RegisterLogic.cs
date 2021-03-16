using System.Threading.Tasks;
using Alura.ListaLeitura.App.HTML;
using Alura.ListaLeitura.App.Negocio;
using Alura.ListaLeitura.App.Repositorio;
using Microsoft.AspNetCore.Http;

namespace Alura.ListaLeitura.App.Logic
{
    public class RegisterController
    {     
        
        public static string Insert(Livro book)
        {          
            var _repo = new LivroRepositorioCSV();
            _repo.Incluir(book);
            return "Registered book successfully";
        }

        public static Task ShowForm(HttpContext context)
        {
            var html = HtmlUtils.LoadHTMLFile("form");

            return context.Response.WriteAsync(html);
        }

    }
    
}