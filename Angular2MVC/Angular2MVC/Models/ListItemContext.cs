using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Angular2MVC.Models
{
    public class ListItemContext : DbContext
    {   

        public DbSet<ListItem> ListItems { get; set; }

    }
}