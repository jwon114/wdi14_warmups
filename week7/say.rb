# Say it in English
# Write a program that will take a number from 0 to 99 and spell out that number in English.

# In other words, if the input to the program is 22, then the output should be 'twenty-two'

# e.g.

# Say.new(22).in_english
# Say.new(-1).in_english
# # say.rb:7:in 'in_english': Number must be between 0 and 99, inclusive. (ArgumentError)
# The program must also report any values that are out of range.

# Some good test cases for this program are:

# 0
# 14
# 50
# 98
# -1
# 100
# Extensions
# Re-write the method for the Fixnum class.

require 'pry'


class Say
	def initialize(input)
		@number = input
		@two_number_lookup = { "2" => "twenty", "3" => "thirty", "4" => "fourty", "5" => "fifty", "6" => "sixty", "7" => "seventy", "8" => "eighty", "9" => "ninety" }
		@single_number_lookup = { "0" => "zero", "1" => "one", "2" => "two", "3" => "three", "4" => "four", "5" => "five", "6" => "six", "7" => "seven", "8" => "eight", "9" => "nine" }
		@teen_number_lookup = { "10" => "ten", "11" => "eleven", "12" => "twelve", "13" => "thirteen", "14" => "fourteen", "15" => "fifteen", "16" => "sixteen", "17" => "seventeen", "18" => "eighteen", "19" => "nineteen" }
	end

	def in_english
		if @number.between?(0, 9)
			return @single_number_lookup[@number.to_s]
		elsif @number.between?(10, 19)
			return @teen_number_lookup[@number.to_s]
		elsif @number.between?(20, 99)
			if @number.to_s[1] == "0"
				return @two_number_lookup[@number.to_s[0]]
			else
				return @two_number_lookup[@number.to_s[0]] + "-" + @single_number_lookup[@number.to_s[1]]
			end
		else
			return "Number must be between 0 and 99"
		end
	end


end

puts Say.new(0).in_english
puts Say.new(14).in_english
puts Say.new(50).in_english
puts Say.new(98).in_english
puts Say.new(-1).in_english
puts Say.new(100).in_english
# binding.pry