using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Alura.ListaLeitura.App.HTML;
using Alura.ListaLeitura.App.Negocio;
using Alura.ListaLeitura.App.Repositorio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

namespace Alura.ListaLeitura.App.Logic
{
    public class BooksLogic
    {
        public static string LoadList(IEnumerable<Livro> books)
        {
            var html = HtmlUtils.LoadHTMLFile("list");
            foreach (var book in books)
            {
                html = html.Replace("#NEW-ITEM#", $"<li>{book.Titulo} - {book.Autor}</li>#NEW-ITEM#");
            }
            return html.Replace("#NEW-ITEM#", "");
        }      

        public static Task BooksToRead(HttpContext context)
        {
            var _repo = new LivroRepositorioCSV();
            var html = LoadList(_repo.ParaLer.Livros);
            return context.Response.WriteAsync(html);
        }
        public static Task BooksReading(HttpContext context)
        {
            var _repo = new LivroRepositorioCSV();
            var html = LoadList(_repo.Lendo.Livros);
            return context.Response.WriteAsync(html);
        }
        public static Task BooksRead(HttpContext context)
        {
            var _repo = new LivroRepositorioCSV();
             var html = LoadList(_repo.Lidos.Livros);
            return context.Response.WriteAsync(html);
        }
         public static Task ShowDetail(HttpContext context)
        {
            int id = Convert.ToInt32(context.GetRouteValue("id"));
            var _repo = new LivroRepositorioCSV();
            var book = _repo.Todos.FirstOrDefault(b => b.Id == id);
            return context.Response.WriteAsync(book.ToString());
        }

    }
    
}