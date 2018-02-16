require 'minitest/autorun'
require 'minitest/reporters'
require_relative 'concat_unique_strings'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new() # optional

class ConcatUniqueStringsTest < MiniTest::Unit::TestCase

	def test_longest_output
		s1 = 'xyaabbbccccdefww'
		s2 = 'xxxxyyyyabklmopq'
		assert_equal 'abcdefklmopqwxy', longest(s1, s2)
	end
end