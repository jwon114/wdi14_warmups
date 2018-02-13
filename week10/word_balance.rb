# Word Balance
# We're going to balance words on one of the letters in them.

# We'll use the position and letter itself to calculate the weight around the balance point. A word can be balanced if the weight on either side of the balance point is equal. Not all words can be balanced, but those that can are interesting for this challenge.

# The formula to calculate the weight of the word is to look at the letter position in the English alphabet (so A=1, B=2, C=3 ... Z=26) as the letter weight, then multiply that by the distance from the balance point, so the first letter away is multiplied by 1, the second away by 2, etc.

# As an example:

# STEAD balances at T: 1 * S(19) = 1 * E(5) + 2 * A(1) + 3 * D(4))
# Input Description - You'll be given a series of English words.

# Example: STEAD

# Output Description - Your program or function should emit the words split by their balance point and the weight on either side of the balance point.

# Example: S T EAD - 19

# This indicates that the T is the balance point and that the weight on either side is 19.

# Try these words...
# CONSUBSTANTIATION
# WRONGHEADED
# UNINTELLIGIBILITY
# SUPERGLUE
# Challenge Output```

# #### Output should be...
# CONSUBST A NTIATION - 456 WRO N GHEADED - 120 UNINTELL I GIBILITY - 521 SUPERGLUE DOES NOT BALANCE```

require 'pry'

def word_balance(word)

	letters = {
		'A' => 1,
		'B' => 2,
		'C' => 3,
		'D' => 4,
		'E' => 5,
		'F' => 6,
		'G' => 7,
		'H' => 8,
		'I' => 9,
		'J' => 10,
		'K' => 11,
		'L' => 12,
		'M' => 13,
		'N' => 14,
		'O' => 15,
		'P' => 16,
		'Q' => 17,
		'R' => 18,
		'S' => 19,
		'T' => 20,
		'U' => 21,
		'V' => 22,
		'W' => 23,
		'X' => 24,
		'Y' => 25,
		'Z' => 26
	}

	def check_balance(left_sum, right_sum)
		if left_sum == right_sum
			return true
		else
			return false
		end
	end

	word_array = word.upcase.split('')
	balanced = false
	centre_index = 0
	
	while(!balanced && centre_index < word_array.length - 1)
		if centre_index > 0 && centre_index < word_array.length - 1
			left_array = word_array.slice(0, centre_index)
			right_array = word_array.slice(centre_index + 1, word_array.length)
			left_sum = 0
			right_sum = 0

			left_array.each_with_index do |letter, index|
				left_sum += letters[letter] * (centre_index - (index + 1))
				# puts "left sum in loop #{left_sum}"
			end

			# binding.pry
			right_array.each_with_index do |letter, index|
				right_sum += letters[letter] * ((index + 1) - centre_index)
			end

			balanced = check_balance(left_sum, right_sum)
			puts "left array #{left_array}"
			# puts "left sum #{left_sum}"
			puts "right array #{right_array}"
			puts "right sum #{right_sum}"
			puts "centre #{word_array[centre_index]}"
			puts "word length #{word_array.length}"
		end
		centre_index += 1 if !balanced
	end

	if balanced
		first_part = word_array.slice(0, centre_index).join('')
		centre = word_array.slice(centre_index, 1).join('')
		last_part = word_array.slice(centre_index + 1, word_array.length).join('')
		sum = left_sum
		result = "#{first_part} #{centre} #{last_part} - #{sum}"
		puts result
		# binding.pry
	else
		puts 'not balanced'
	end


end

# word_balance('STEAD')
word_balance('CONSUBSTANTIATION')
# word_balance('WRONGHEADED')
# word_balance('UNINTELLIGIBILITY')



