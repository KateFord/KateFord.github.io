﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MegaChallengeWar
{
    public class Game  {
        private Player _player1;
        private Player _player2;

        public Game(string player1Name, string player2Name)
        {
            this._player1 = new Player();
            this. _player1.Name = player1Name;
            this. _player2 = new Player();
            this._player2.Name = player2Name;
         }

        public string Play()
        {
            
            Deck deck = new Deck();
            deck.Shuffle();
          
            string result = "<h3>Dealing cards ...<h3>";
            result += deck.Deal(this._player1, this._player2);

            result += "<h3>Begin battle ...<h3>";
            int turn = 0;

            while (_player1.Cards.Count > 0 && _player2.Cards.Count > 0)
            {

                Battle battle = new Battle();
                result += battle.doBattle(this._player1, this._player2);
                turn++;
                if (turn > 10) break;
            }

            result += determineWinner();
            return result;

        }

        private string determineWinner()
        {
            string result = "<br/><br/>&nbsp;&nbsp;<span style='font-size:30px;'>";

            if (this._player1.Cards.Count > this._player2.Cards.Count)
                  result += "<span style='color:red;font-weight:bolder;'>Player 1 wins!</span>";
            else if (this._player1.Cards.Count < this._player2.Cards.Count)
                result += "<span style='color:blue;font-weight:bolder;'>Player 2 wins!</span>";
            else result += "";

            result += "</span>";
            result += "   (<span style='color:red;font-weight:bolder;'>Player 1: " + this._player1.Cards.Count
           + "</span>  /  <span style='color:blue;font-weight:bolder;'>Player 2: " + this._player2.Cards.Count + "<span/>)";

            return result;
        }

    }
}