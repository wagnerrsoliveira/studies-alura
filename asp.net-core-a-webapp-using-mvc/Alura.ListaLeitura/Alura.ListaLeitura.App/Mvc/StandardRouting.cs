using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

namespace Alura.ListaLeitura.App.Mvc
{
    public class StandardRouting
    {
        public static Task StandardTreatment(HttpContext context)
        {
            //rota padrão: /<Classe>Logica/Metodo
            //{class}/{method}

            var classe = Convert.ToString(context.GetRouteValue("class"));
            var nomeMetodo = Convert.ToString(context.GetRouteValue("method"));

            var nomeCompleto = $"Alura.ListaLeitura.App.Logic.{classe}Logic";

            var tipo = Type.GetType(nomeCompleto);
            var metodo = tipo.GetMethods().Where(m => m.Name == nomeMetodo).First();
            var requestDelegate = (RequestDelegate)Delegate.CreateDelegate(typeof(RequestDelegate), metodo);

            return requestDelegate.Invoke(context);
        } 
    }
}