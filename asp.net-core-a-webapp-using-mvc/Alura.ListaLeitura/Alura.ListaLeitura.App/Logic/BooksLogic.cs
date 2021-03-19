using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Alura.ListaLeitura.App.HTML;
using Alura.ListaLeitura.App.Negocio;
using Alura.ListaLeitura.App.Repositorio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace Alura.ListaLeitura.App.Logic
{
    public class BooksController: Controller
    {
        public IEnumerable<Livro> books { get; set; }
               
        public IActionResult ToRead()
        {
            var _repo = new LivroRepositorioCSV();

            ViewBag.books = _repo.ParaLer.Livros;

            return View("list");
        }
        public IActionResult Reading()
        {
           var _repo = new LivroRepositorioCSV();

            ViewBag.books = _repo.Lendo.Livros;

            return View("list");
        }
        public IActionResult Read()
        {
          var _repo = new LivroRepositorioCSV();

            ViewBag.books = _repo.Lidos.Livros;

            return View("list");
        }
        public string Details(int id)
        {
            var _repo = new LivroRepositorioCSV();
            var book = _repo.Todos.FirstOrDefault(b => b.Id == id);
            return book.ToString();
        }

    }

}