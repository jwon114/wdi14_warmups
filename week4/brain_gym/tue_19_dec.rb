# Daniel
# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.

# He answers 'Sure.' if you ask him a question. He answers 'Whatever.' if you tell him something. He answers 'Woah, chill out!' if you yell at him (ALL CAPS). He says 'Fine. Be that way!' if you address him without actually saying anything.

# Write code in ruby so that you can have an interactive conversation with Daniel. Make sure you include some testing in order to verify your code.

# Hints
# gets, get string is the opposite of puts put string.

# Notice that when you type "Something" and then hit enter, you get the string "Something\n"

# loop do
#   # talk to Daniel here
# end
# Extensions
# l33t sP34k
# Daniel, inspired by the 90s, is bringing back "l33t sP34k", and he'll teach you how to do it. Start any sentence with "Bro, ", and he'll translate the rest of it into l33t sP34k for you.

# In brief:

# Several vowels are always replaced with numbers: a = 4, e = 3, i = 1, o = 0
# Words that start with a consonant start with lower case
# Consonants after the first letter alternate upper and lower case, except the alternation starts over with lowercase after a digit (ex: sCh00l)

require	"pry"

def talk_to_daniel

	def shouting?(text) # method not function, has to be defind before we use it
		if text.upcase == text && !text.empty?
			return true
		else
			return false
		end
	end

	def question?(text)
		if text.strip.end_with? "?"
			return true
		else
			return false
		end
	end

	talking = true
	
	while talking do 

		puts "Talk to Daniel"
		user_input = gets.chomp

		# if you ask him a question
		if question?(user_input)
			puts "Sure"
		elsif shouting?(user_input)
			puts "Woah, chill out!"
		elsif user_input.empty?
			puts "Fine. Be that way!"
		elsif user_input.start_with? "Bro, "
			# use a hash to store the vowels and their corresponding numbers
			vowels = { :a => "4", :e => "3", :i => "1", :o => "0" }

			input_array = user_input.downcase.split("")
			output = ''
			capital_letter = false
			input_array.each do | letter |
				if vowels.has_key?(letter.to_sym)
					letter = vowels[letter.to_sym]
				end

				if capital_letter
					letter = letter.upcase
					capital_letter = false
				else
					capital_letter = true
				end

				if letter == ' ' || /\d+/.match(letter)
					capital_letter = false
				end

				if /[a-z]/.match(letter)
					capital_letter = true
				end

				output += letter
			end

			puts output
		else
			puts "Whatever"
		end
	end
end

talk_to_daniel



	
	





