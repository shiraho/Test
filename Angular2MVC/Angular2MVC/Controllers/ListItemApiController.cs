using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Angular2MVC.Models;
using System.Data;
using System.Data.Entity;

namespace Angular2MVC.Controllers
{
    public class ListItemApiController : ApiController
    {
        ListItemContext db = new ListItemContext();
        public IEnumerable<ListItem> GetListItems()
        {
            return db.ListItems;
        }

        public ListItem GetList(string id)
        {
            ListItem listItem = db.ListItems.Find(id);
            return listItem;
        }

        [HttpPost]
        public void AddListItem([FromBody]ListItem listItem)
        {
            db.ListItems.Add(listItem);
            db.SaveChanges();
        }

        [HttpPut]
        public void EditListItem(int id, [FromBody]ListItem listItem)
        {
            if (id == listItem.Id)
            {
                db.Entry(listItem).State = EntityState.Modified;

                db.SaveChanges();
            }
        }
        public void DeleteListItem(string id)
        {
            ListItem listItem = db.ListItems.Find(id);
            if (listItem != null)
            {
                db.ListItems.Remove(listItem);
                db.SaveChanges();
            }
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
