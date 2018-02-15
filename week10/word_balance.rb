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

def calculate_weights(scores_array, balance_index)
	# create an array of weighted scores * distance from centre
	weights = scores_array.each_with_index.map do |score, index|
		score * (index - balance_index)
	end
	return {
		balanced: weights.sum == 0,
		per_side: weights[0..balance_index].sum.abs,
		index: balance_index
	}
end

def create_alphabet
	alphabet = ('A'..'Z').to_a
	letter_score = {}
	alphabet.each_with_index do |letter, index|
		letter_score[letter] = index + 1
	end
	return letter_score
end

def word_balance(word)

	# create object with scores per letter
	letter_score = create_alphabet
	
	# convert word array into array of weights
	scores_array = word.upcase.split('').map { |letter| letter_score[letter] }

	# loop through weights array and sum weights * distance to centre
	result = {}
	scores_array.each_index do |balance_index|
		result = calculate_weights(scores_array, balance_index)
		break if result[:balanced]
	end

	if result[:balanced]
		puts "#{word[0..result[:index] - 1]} #{word[result[:index]]} #{word[result[:index] + 1..word.length]} - #{result[:per_side]}"
	else
		puts "#{word} DOES NOT BALANCE"
	end

end

word_balance('STEAD')
word_balance('CONSUBSTANTIATION')
word_balance('WRONGHEADED')
word_balance('UNINTELLIGIBILITY')
word_balance('SUPERGLUE')


