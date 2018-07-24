using ChallengeMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace ChallengeMVC.Controllers

{
    public class ComicBookController : Controller
    {
        // GET: ComicBook
        public ActionResult Index()
        {
            var comicBookList = ComicBookManager.GetComicBooks();
            return View(comicBookList);
        }

        // GET: ComicBook/Details/5
        public ActionResult Details(int id)
        {

            if (String.IsNullOrEmpty(id.ToString()))
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var comicList = ComicBookManager.GetComicBooks();
            var comic = comicList.FirstOrDefault(p => p.ComicBookId == id);

            if ( comicList == null)
            {
                return HttpNotFound();
            }

            return View(comic);
        }

    }
}
