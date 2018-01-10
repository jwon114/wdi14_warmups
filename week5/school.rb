# Grade School
# Write a small archiving program that stores students along with the grade that they are in.

# school = School.new("Haleakala Hippy School")
# If no students have been added, the db should be empty:

# school.db
# # => {}
# When you add a student, they get added to the correct grade.

# school.add("James", 2)
# school.db
# # => {2 => ["James"]}
# You can, of course, add several students to the same grade, and students to different grades.

# school.add("Phil", 2)
# school.add("Jennifer", 3)
# school.add("Little Billy", 1)
# school.db
# # => {2 => ["James", "Blair"], 3 => ["Jennifer"], 1 => ["Little Billy"]}
# Also, you can ask for all the students in a single grade:

# school.grade(2)
# # => ["James", "Blair"]
# extension
# Lastly, you should be able to get a sorted list of all the students. Grades are sorted in descending order numerically, and the students within them are sorted in ascending order alphabetically.

# school.sort
# # => {1 => ["Little Billy"], 2 => ["Blair", "James"], 3 => ["Jennifer"]}

require 'pry'

class School
	def initialize(school_name)
		@school_name = school_name
		# @students = {}
		@students = {1=>["james", "dan"], 3=>["alex", "jen", "adam"], 2=>["jeff", "robbie", "ben"]} # testing purposes
	end

	def add(name, grade_number)
		if @students[grade_number]
			students_list = @students[grade_number]
		else
			students_list = []
		end
		students_list << name
		@students[grade_number] = students_list
	end

	def db
		@students
	end

	def grade(grade_number)
		@students[grade_number]
	end

	def sort
		sorted_students = {}
		@students.each { |grade, students| sorted_students[grade] = students.sort } #this returns a sorted copy of the hash and doesn't modify the instance variable
		# sorted_students = @students.each { |grade, students| students.sort } #loop through hash and sorts students in place (overwrites old value)
		return sorted_students.sort.to_h #using sort on a hash returns a sorted array so must convert back to hash
	end
end

s = School.new('cool')
# s.sort

binding.pry