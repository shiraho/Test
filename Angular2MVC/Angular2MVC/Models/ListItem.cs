using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2MVC.Models
{
    public class ListItem
    {
        public int Id { get; set; }
        public bool Type { get; set; }
        //public string Id { get; set; }
        public string Name { get; set; }
        public bool State { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
    }
}