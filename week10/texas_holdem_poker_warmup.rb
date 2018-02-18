# Texas Hold 'em Poker.
# Description:

# For those who want to know more about Texas Hold 'Em Poker or just need a refresher. Check Wikipedia Article on Texas Hold 'Em Poker For the first challenge we will simulate the dealing part of the game.

# Input:
# You will be asked how many players 2 to 8. You will always be one of the players and you are facing 1 to 7 other computer controlled players.

# Output:
# Display the 2 cards each player is dealt and the display the 5 community cards. Format is left up to you. (The exact method of the output a card. For my examples I am using verbal words but someone might use unicode symbols for the card suit or other. You design this as long as we can tell the cards apart it is all good)

# Example:
# How many players (2-8) ? 3

# Your hand: 2 of Clubs, 5 of Diamonds
# CPU 1 Hand: Ace of Spades, Ace of Hearts
# CPU 2 Hand: King of Clubs, Queen of Clubs

# Flop: 2 of Hearts, 5 of Clubs, Ace of Clubs
# Turn: King of Hearts
# River: Jack of Hearts
# Dealing Cards:
# To keep things close to the game you will be dealing from 1 deck of standard playing cards. Once you deal that card you cannot deal it again. The exact method is part of the challenge and for you to decide, design and implement. In Texas Hold em you burn a card (draw and discard without looking at it) before you do the flop, turn and river. It removes these cards from the pool of possible cards that can be dealt. If you wish to show these cards (I did not in my example) then please for science go for it.

# Extension
# In the intermediate you will be asked to compare various hands of poker to find which hand is the winning hand.

require 'pry'

def create_deck
	numbers = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace']
	suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
	deck = []
	suits.each do |suit|
		numbers.each do |number|
			deck << "#{number} #{suit}"
		end 
	end
	return deck
end

def ask_number_of_players
	begin
		puts "Enter the number of players between 2 to 8"
		number_of_players = gets.chomp().to_i
	end until number_of_players >= 2 && number_of_players <= 8
	return number_of_players
end

def deal_cards(number_of_players, deck)
	players = []
	for player_number in 1..number_of_players do 
		player = {}
		player[:id] = player_number
		player[:cards] = []
		for card in 1..2 do
			selected_card = deck.sample
			player[:cards] << selected_card
			deck.delete(selected_card)
		end
		players << player
	end
	return [players, deck]
end

def display_player_hands(players)
	players.each do |player|
		if player[:id] == 1
			puts "Your Hand: #{player[:cards].join(', ')}" 
		else
			puts "CPU #{player[:id]} Hand: #{player[:cards].join(', ')}" 
		end
	end
end

def burn_card(deck)
	selected_card = deck.sample
	deck.delete(selected_card)
	puts "#{selected_card} burned"
	return deck
end

def flop(deck)
	board = []
	for card in 1..3 do
		selected_card = deck.sample
		board << selected_card
		deck.delete(selected_card)		
	end
	return [board, deck]
end

def display_flop(board)
	puts "Flop: #{board.join(', ')}"
end

def turn(board, deck)
	turn_card = deck.sample
	board << turn_card
	deck.delete(turn_card)
	return [board, deck, turn_card]
end

def display_turn(turn_card)
	puts "Turn: #{turn_card}"
end

def river(board, deck)
	river_card = deck.sample
	board << river_card
	deck.delete(river_card)
	return [board, deck, river_card]
end

def display_river(river_card)
	puts "River: #{river_card}"
end

def texas_holdem_poker
	number_of_players = ask_number_of_players
	deck = create_deck
	players, deck = deal_cards(number_of_players, deck)
	display_player_hands(players)
	deck = burn_card(deck)
	board, deck = flop(deck)
	display_flop(board)
	deck = burn_card(deck)
	board, deck, turn_card = turn(board, deck)
	display_turn(turn_card)
	deck = burn_card(deck)
	board, deck, river_card = river(board, deck)
	display_river(river_card)
end

texas_holdem_poker











