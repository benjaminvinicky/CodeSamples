using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ISIT420Final.Models
{
    public class TopGrossingESRB
    {
        public string Name { get; set; }
        [DisplayFormat(DataFormatString = "{0:c}")]
        public double Price { get; set; }
        public int Quantity { get; set; }
        [DisplayFormat(DataFormatString = "{0:c}")]
        public double TotalSales { get; set; }
    }

    public class TopGenre
    {
        public string Genre { get; set; }
        public int Quantity { get; set; }
    }
}