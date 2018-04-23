using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ISIT420Final.Models;

namespace ISIT420Final.Controllers
{
    public class HomeController : Controller
    {
        GameDBEntities myGame = new GameDBEntities();

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Query1()
        {
            var query1 = from rating in myGame.Ratings
                         select rating;

            // to use a drop down list, you have to build a List of this particular Class type
            List<SelectListItem> DropDownItems = new List<SelectListItem>();

            foreach (var item in query1)
            {
                DropDownItems.Add(new SelectListItem { Text = item.RatingName, Value = item.RatingID.ToString() });
            }
            ViewBag.TheList = DropDownItems;
            return View();
        }
        public ActionResult ProcessForm1()
        {
            int SelectedRatingId = Convert.ToInt32(Request.Form["TheList"].ToString());
            string ESRBrating = "";
            var query1 =
                from rating in myGame.Ratings
                where SelectedRatingId == rating.RatingID
                select rating;

            if(query1 != null) {
                List<Rating> ratingList = query1.ToList();
                ESRBrating = ratingList[0].RatingName;
            }

            ViewBag.Message = "Highest grossing games rated \"" + ESRBrating + "\"";

            var query2 =
                (from a in myGame.Games
                 join b in myGame.Ratings
                 on a.RatingID equals b.RatingID
                 where a.RatingID == SelectedRatingId
                 where a.GameSalesNorthAmerica > 1
                 let totalGross = a.GamePrice * a.GameSalesNorthAmerica
                 select new TopGrossingESRB
                 {
                     Name = a.GameName,
                     Price = (double)a.GamePrice,
                     Quantity = (int)a.GameSalesNorthAmerica,
                     TotalSales = (double)totalGross,
                 }).OrderByDescending(s => s.TotalSales).Take(10);

            List<TopGrossingESRB> gameList = query2.ToList();
            return View(gameList);
        }
        public ActionResult Query2()
        {
            List<SelectListItem> DropDownItems = new List<SelectListItem>();

            DropDownItems.Add(new SelectListItem { Text = "North America", Value = "North America" });
            DropDownItems.Add(new SelectListItem { Text = "Europe", Value = "Europe" });
            DropDownItems.Add(new SelectListItem { Text = "Japan", Value = "Japan" });
            DropDownItems.Add(new SelectListItem { Text = "Other", Value = "Other" });
            ViewBag.TheList = DropDownItems;
            return View();
        }
        public ActionResult ProcessForm2()
        {
            string SelectedRegion = Request.Form["TheList"].ToString();
            ViewBag.Message = "Most Popular Genres for " + SelectedRegion;
            if(SelectedRegion == "North America")
            {
                var query1 =
                    (from a in myGame.Games
                     where a.GameSalesNorthAmerica > 0
                     group a by a.Genre.GenreName into g
                     select new TopGenre
                     {
                         Genre = g.Key,
                         Quantity = (int)g.Sum(s => s.GameSalesNorthAmerica)
                     }).OrderByDescending(s => s.Quantity).Take(10);
                List<TopGenre> gameList = query1.ToList();
                return View(gameList);
            }
            else if (SelectedRegion == "Europe")
            {
                var query1 =
                    (from a in myGame.Games
                     where a.GameSalesEurope > 0
                     group a by a.Genre.GenreName into g
                     select new TopGenre
                     {
                         Genre = g.Key,
                         Quantity = (int)g.Sum(s => s.GameSalesEurope)
                     }).OrderByDescending(s => s.Quantity).Take(10);
                List<TopGenre> gameList = query1.ToList();
                return View(gameList);
            }
            else if (SelectedRegion == "Japan")
            {
                var query1 =
                    (from a in myGame.Games
                     where a.GameSalesJapan > 0
                     group a by a.Genre.GenreName into g
                     select new TopGenre
                     {
                         Genre = g.Key,
                         Quantity = (int)g.Sum(s => s.GameSalesJapan)
                     }).OrderByDescending(s => s.Quantity).Take(10);
                List<TopGenre> gameList = query1.ToList();
                return View(gameList);
            }
            else if (SelectedRegion == "Other")
            {
                var query1 =
                    (from a in myGame.Games
                     where a.GameSalesOther > 0
                     group a by a.Genre.GenreName into g
                     select new TopGenre
                     {
                         Genre = g.Key,
                         Quantity = (int)g.Sum(s => s.GameSalesOther)
                     }).OrderByDescending(s => s.Quantity).Take(10);
                List<TopGenre> gameList = query1.ToList();
                return View(gameList);
            }
            return View();
        }
        public ActionResult Query3()
        {
            List<SelectListItem> DropDownItems = new List<SelectListItem>();

            DropDownItems.Add(new SelectListItem { Text = "Windows", Value = "Windows" });
            DropDownItems.Add(new SelectListItem { Text = "Linux", Value = "Linux" });
            DropDownItems.Add(new SelectListItem { Text = "Mac", Value = "Mac" });
            ViewBag.TheList = DropDownItems;
            return View();
        }
        public ActionResult ProcessForm3()
        {
            string SelectedPlatform = Request.Form["TheList"].ToString();
            ViewBag.Message = "Most Popular Genres for " + SelectedPlatform;
            var query1 =
                (from a in myGame.Games
                    where a.Platform.PlatformName.Contains(SelectedPlatform) && a.GameSalesNorthAmerica > 0
                    group a by a.Genre.GenreName into g
                    select new TopGenre
                    {
                        Genre = g.Key,
                        Quantity = (int)g.Sum(s => s.GameSalesNorthAmerica)
                    }).OrderByDescending(s => s.Quantity).Take(10);
            List<TopGenre> gameList = query1.ToList();
            return View(gameList);

        }
        public ActionResult Query4()
        {
            List<SelectListItem> DropDownItems = new List<SelectListItem>();
            DropDownItems.Add(new SelectListItem { Text = "Windows", Value = "Windows" });
            DropDownItems.Add(new SelectListItem { Text = "Linux", Value = "Linux" });
            DropDownItems.Add(new SelectListItem { Text = "Mac", Value = "Mac" });
            ViewBag.TheList = DropDownItems;
            return View();
        }
        public ActionResult ProcessForm4()
        {
            string SelectedPlatform = Request.Form["TheList"].ToString();
            ViewBag.Message = "Genre with most releases on " + SelectedPlatform;
            var query1 =
                (from a in myGame.Games
                    where a.Platform.PlatformName.Contains(SelectedPlatform) && a.GameSalesNorthAmerica > 0
                    group a by a.Genre.GenreName into g
                    select new TopGenre
                    {
                        Genre = g.Key,
                        Quantity = (int)g.Count()
                    }).OrderByDescending(s => s.Quantity).Take(10);
            List<TopGenre> gameList = query1.ToList();
            return View(gameList);
            
        }
    }
}