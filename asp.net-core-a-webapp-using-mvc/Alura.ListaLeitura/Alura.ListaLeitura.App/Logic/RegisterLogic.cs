using Alura.ListaLeitura.App.Negocio;
using Alura.ListaLeitura.App.Repositorio;
using Microsoft.AspNetCore.Mvc;

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

        public IActionResult ShowForm()
        {
            var html = new ViewResult { ViewName = "form.html" };
            return html;
        }

    }

}