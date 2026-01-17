using Microsoft.EntityFrameworkCore;
using PhonebookApi.Models;

namespace PhonebookApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().HasData(
                new Contact { Id = 1, first_name = "John", last_name = "Doe", email = "john@example.com", phone = "123-456-7890" },
                new Contact { Id = 2, first_name = "Jane", last_name = "Smith", email = "jane@example.com", phone = "098-765-4321" }
            );
        }
    }
}