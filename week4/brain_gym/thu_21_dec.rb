# Print out all the leap years in the last 100 years.

# For numbers between 0 and 200:

require "pry"
require "Date"
require "Prime"

def is_leap_year()
	current_year = Date.today.year
	first_year = current_year - 100

	year_arr = []
	for year in first_year .. current_year
		if (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
			year_arr << year
		end
	end
	p year_arr
end

is_leap_year

# a) print out multiples of 7.
multiples_of_seven = []
# for num in 0 .. 200
# 	if num % 7 == 0
# 		multiples_of_seven << num
# 	end
# end

(7..200).step(7) { | num | multiples_of_seven << num }

p multiples_of_seven

# b) print out every second odd number.
every_second_odd_number = []
# num = 1
# until num > 200
# 	every_second_odd_number << num
# 	num += 4
# end

(1..200).step(4) { | num | every_second_odd_number << num }

p every_second_odd_number

# c) print out all prime numbers.
prime_numbers = []
Prime.each(200) do | num | 
	prime_numbers << num
end
p prime_numbers

# for num in 0 .. 200
# 	isPrime = false
# 	if num == 0 || num == 1
# 		next
# 	end
# 	for  in 
# end

