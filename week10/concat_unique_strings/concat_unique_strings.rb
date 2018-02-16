#  Concat Unique Strings
#  Solve in JavaScript
#  Take 2 strings s1 and s2 each only containing letters from a to z. Return one new sorted string, the longest possible, containing distinct letters - each taken only once - from s1 and s2.

#  We recommend using underscore.js to help with solving the problem: http:underscorejs.org/

#  Example:
#  s1 = "xyaabbbccccdefww"
#  s2 = "xxxxyyyyabklmopq"
#  longest(s1, s2) -> "abcdefklmopqwxy"
#  Extension
#  Now solve in Ruby!

require 'pry'

def longest(s1, s2)
	# assumed the arguments will be of lowercase
	if /^[a-z]+$/.match(s1) && /^[a-z]+$/.match(s2)
		concat_sorted_unique = (s1 + s2).split('').sort.uniq.join('')
	else
		abort "arguments must only be from [a-z]"
	end
end
