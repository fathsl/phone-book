using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PhonebookApi.Models;

public class Contact
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    [Required]
    [StringLength(50)]
    public string first_name { get; set; } = string.Empty;
    
    [StringLength(50)]
    public string? last_name { get; set; }

    [StringLength(250)]
    public string? email { get; set; }

    [StringLength(250)]
    public string? phone { get; set; }
}