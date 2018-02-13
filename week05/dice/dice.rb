# Dice
# Write a program using classes to generate a standard dice roll.

# Dice.roll
# # => 6
# Note: the code above is calling a class method of Dice called "roll". It is not an instance method e.g. Dice.new.roll. Google "ruby class methods" before proceeding with the problem

# It should give you a different result each time.

# Dice.roll
# # => 5
# Dice.roll
# # => 2
# When you pass in a number, it rolls the dice that many times, and returns you the array of rolled dice

# Dice.roll(3)
# # => [2,5,1]
# Extension
# Add another method named pretty_roll that display die faces instead of a number after rolling.
# Dice.pretty_roll
# ________
# | *  * |
# | *  * |
# ________

require 'pry'
require 'catpix'
# had to run these commands before i could install imagemagick gem
# REFERENCES:
# https://stackoverflow.com/questions/39494672/rmagick-installation-cant-find-magickwand-h
# https://github.com/pazdera/catpix
# COMMANDS FOR GEMS:
# brew unlink imagemagick
# brew install imagemagick@6 && brew link imagemagick@6 --force
# gem install imagemagick
# gem install catpix

class Dice

	def self.roll(number = 1)
		return rand(1..6) if number == 1
		
		value_array = []
		number.times do
			value_array << rand(1..6)
		end
		return value_array
	end

	def self.pretty_roll
		roll_value = rand(1..6)
		case roll_value
		when 1
			catpix("dice1.gif")
		when 2
			catpix("dice2.gif")
		when 3
			catpix("dice3.gif")
		when 4
			catpix("dice4.gif")
		when 5
			catpix("dice5.gif")
		when 6
			catpix("dice6.gif")
		end

	end

	def self.catpix(image)
		Catpix::print_image image,
  			:limit_x => 0.25,
  			:limit_y => 0.25,
  			:center_ynter_x => false,
  			:center_y => false,
  			:bg => "black",
  			:bg_fill => false
  	end
end

# Catpix::print_image "dice3.gif",
#   :limit_x => 0.25,
#   :limit_y => 0.25,
#   :center_x => false,
#   :center_y => false,
#   :bg => "black",
#   :bg_fill => false

binding.pry