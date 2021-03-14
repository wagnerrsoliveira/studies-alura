using Alura.ListaLeitura.App.Mvc;
using Microsoft.AspNetCore.Builder;
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
            builder.MapRoute("{class}/{method}", StandardRouting.StandardTreatment);
            // builder.MapRoute("Books/ToRead", BooksLogic.ToRead);
            // builder.MapRoute("Books/Reading", BooksLogic.Reading);
            // builder.MapRoute("Books/Read", BooksLogic.Read);
            // builder.MapRoute("Books/Details/{id:int}",BooksLogic.Detail);
            
            // builder.MapRoute("Register/NewBook/{name}/{author}", RegisterLogic.NewBook);
            // builder.MapRoute("Register/NewBook", RegisterLogic.ShowForm);
            // builder.MapRoute("Register/Add", RegisterLogic.Insert);

            var routes = builder.Build();
            app.UseRouter(routes);
        }

    }
}