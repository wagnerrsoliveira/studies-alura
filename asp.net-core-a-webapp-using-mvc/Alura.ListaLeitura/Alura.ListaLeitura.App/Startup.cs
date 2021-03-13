using Alura.ListaLeitura.App.Logic;
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
            builder.MapRoute("Books/ToRead", BooksLogic.BooksToRead);
            builder.MapRoute("Books/Reading", BooksLogic.BooksReading);
            builder.MapRoute("Books/Read", BooksLogic.BooksRead);
            builder.MapRoute("Books/Details/{id:int}",BooksLogic.ShowDetail);
            
            builder.MapRoute("Register/NewBook/{name}/{author}", RegisterLogic.NewBookToRead);
            builder.MapRoute("Register/NewBook", RegisterLogic.ShowForm);
            builder.MapRoute("Register/Add", RegisterLogic.ProcessForm);

            var routes = builder.Build();
            app.UseRouter(routes);
        }

    }
}