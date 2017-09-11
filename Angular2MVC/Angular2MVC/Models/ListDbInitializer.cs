using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Angular2MVC.Models
{
    public class ListDbInitializer : DropCreateDatabaseAlways<ListItemContext>
    {
        protected override void Seed(ListItemContext db)
        {
            db.ListItems.Add(new ListItem { Type = false, Name = "Remove the border", State = true, Description = "qweqwe", Status = false });
            db.ListItems.Add(new ListItem { Type = false, Name = "Add OF button", State = false, Description = "Add OK button for Test Form", Status = false });
            db.ListItems.Add(new ListItem { Type = false, Name = "Remove the border", State = true, Description = "qweqwe", Status = false });

            base.Seed(db);
        }
    }
}