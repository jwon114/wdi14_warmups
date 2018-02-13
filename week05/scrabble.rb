# Scrabble Score
# Write a program that, given a word, computes the scrabble score for that word.

# Scrabble.score("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb.

# Letter Values
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Extensions
# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.

require 'pry'

class Scrabble

	@@letter_lookup = {
		['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'] => 1,
		['D', 'G'] => 2,
		['B','C', 'M', 'P'] => 3,
		['F', 'H', 'V', 'W', 'Y'] => 4,
		['K'] => 5,
		['J', 'X'] => 8, 
		['Q', 'Z'] => 10
	}

	def self.buildLetterHash
		@@letterHash = {}
		@@letter_lookup.each do |key, value|
			key.each { |letter| @@letterHash[letter.to_sym] = value }
		end
	end

	def self.score(word)
		buildLetterHash
		score = 0
		word.upcase.split("").each { |letter| score += @@letterHash[letter.to_sym] }
		return score
	end

end

binding.pry

# Scrabble.score('hi')
