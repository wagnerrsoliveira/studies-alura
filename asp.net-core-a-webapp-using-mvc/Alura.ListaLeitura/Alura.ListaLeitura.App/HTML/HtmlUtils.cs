using System;
using System.IO;

namespace Alura.ListaLeitura.App.HTML
{
    public class HtmlUtils
    {
        public static string LoadHTMLFile(string fileName)
        {
            var fullNameFile = $"HTML/{fileName}.html";

            using (var file = File.OpenText(fullNameFile))
            {
                return file.ReadToEnd();
            }
        }
    }
}