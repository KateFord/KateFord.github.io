using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ChallengeMVC.Models
{
    
    public class ComicBook
    {
        public int ComicBookId { get; set; }
        [Display(Name = "Title")]
        public string ComicTitle { get; set; }
        [Display(Name = "Episode Number")]
        public int EpisodeNumber { get; set; }
        [Display(Name = "Episode Title")]
        public string EpisodeTitle { get; set; }
        public List<Character> Characters { get; set; }

    }

    public class Character
    {
        public int CharacterId { get; set; }
        public string Name { get; set; }
    }

    public class ComicBookManager
    {
        public static List<ComicBook> GetComicBooks()
        {
            return new List<ComicBook>
            {
                new ComicBook {ComicBookId=1, ComicTitle="The Guardians Of The Galaxy", EpisodeNumber=41, EpisodeTitle="Volume 1", Characters = new List<Character>{ new Character { CharacterId=7, Name="Star-Lord" },new Character{CharacterId=7, Name="Star-Lord" }, new Character {CharacterId=9, Name="Gamora"}}},
                new ComicBook {ComicBookId=2, ComicTitle="Batman Vs Superman", EpisodeNumber=13, EpisodeTitle="Dawn of Justice", Characters = new List<Character>{new Character {CharacterId=1, Name="Superman" }, new Character {CharacterId=2, Name="Batman"}}},
                new ComicBook {ComicBookId=3, ComicTitle="Batman", EpisodeNumber=17, EpisodeTitle="The Dark Knight", Characters= new List<Character>{new Character {CharacterId=2, Name="Batman" }}},
                new ComicBook {ComicBookId=4, ComicTitle="Xman", EpisodeNumber=14, EpisodeTitle="First Class", Characters= new List<Character>{new Character {CharacterId=3, Name="Wolverine" }}},
                new ComicBook {ComicBookId=5, ComicTitle="Thor", EpisodeNumber=2, EpisodeTitle="Ragnaroc", Characters= new List<Character>{new Character  {CharacterId=4, Name="Loki" }, new Character {CharacterId=5, Name="Thor"}}},
                new ComicBook {ComicBookId=6, ComicTitle="Avengers", EpisodeNumber=22, EpisodeTitle="Infinity War", Characters= new List<Character>{new Character{CharacterId=6, Name="Ironman" }, new Character {CharacterId=7, Name="Star-Lord"}}},
                new ComicBook {ComicBookId=7, ComicTitle="Captain America", EpisodeNumber=36, EpisodeTitle="Civil War", Characters= new List<Character>{new Character {CharacterId=4, Name="Loki" }, new Character {CharacterId=5, Name="Thor"}}},
                new ComicBook {ComicBookId=8, ComicTitle="Doctor Strange", EpisodeNumber=7, EpisodeTitle="Time & Space", Characters= new List<Character>{new Character {CharacterId=8, Name="Doctor Strange" }}}

            };
        }
    }

}