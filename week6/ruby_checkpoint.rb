# Question 1
# Define a method called `offer_rose`, which should take one argument named `person` (String).
# When called the method should print to the terminal:
# "Would you take this rose, `person`, in exchange for giving an old beggar woman shelter from the bitter cold?"
# Type your solution directly below this line:

def offer_rose(person)
  puts "Would you take this rose, #{person}, in exchange for giving an old beggar woman shelter from the bitter cold?"
end




# Question 2
# Assume the following hash...

town = {
  residents: ["Maurice", "Belle", "Gaston"],
  castle: {
    num_rooms: 47,
    residents: ["Robby Benson"],
    guests: []
  }
}

# Using Ruby...
# - Remove "Belle" from `residents`
# - Add "Belle" to the `guests` array
# Type your solution directly below this line:

town[:residents].delete("Belle")
town[:castle][:guests] << "Belle"




# Question 3
# Assume you have an array of strings representing friends' names...

friends = ["Chip Potts", "Cogsworth", "Lumière", "Mrs. Potts"]

# Using a loop and string interpolation, print each string in `friends` to the Terminal...
# "Belle is friends with Chip Potts"
# "Belle is friends with Cogsworth"
# "Belle is friends with Lumière"
# "Belle is friends with Mrs. Potts"
# Type your solution directly below this line:

friends.each do |friend|
  puts "Belle is friends with #{friend}"
end


# Question 4
# Assume the following array of hashes:

lost_boys = [
  {name: 'Tootles', age: 11},
  {name: 'Nibs', age: 9},
  {name: 'Slightly', age: 10},
  {name: 'Curly', age: 8},
  {name: 'The Twins', age: 9}
]

# Use `.each` to iterate over the `lost_boys` array and increase each boy's age by
# 30 years.
# Type your solution directly below this line:

lost_boys.each do |boy|
  boy[:age] += 30
end




# Question 5
# Assume the following array:

children = ['Wendy', 'John', 'Michael']

# Use `.map` to iterate through the `children` array and add ` Darling` to the end
# of their names. Assign the returned array to a variable called `darling_children`.
# Example: `Wendy` should become `Wendy Darling` in the new array.
# Type your solution directly below this line:

darling_children = children.map { |child| child + " Darling" }




# Question 6
# Define a Ruby class called `Animal`. Each `Animal` should have...
# - A `name` (String) attribute
# - A `greet` instance method
# - The ability to "get" and "set" `name`
# Type your solution directly below this line:

class Animal
  def initialize(animal_name)
    @name = animal_name
  end

  def greet
    return "Hello"
  end

  def name(new_name = nil)
    if new_name != nil
      @name = new_name
    end
    return @name
  end

end


# Question 7
# Create a new `Animal` instance with the name "Pumba".
# Type your solution directly below this line:

Pumba = Animal.new("Pumba")




