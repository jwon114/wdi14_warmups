# Starbucks
# Write a program that holds on to coffee orders.

# c1 = Coffee.new('latte','2 sugars','medium','Darryl')

# Write the .to_s method for this class so when you puts c1 you will have "Darryl's latte, medium, 2 sugars."

# Extension
# Starbucks always gets names wrong, however. Make the name a bad misspelling of the actual name when you create the order.
# puts c1
# # => "Barrel's latte, medium, 2 sugars."
# When you make a new order, you have to wait for coffee. When you create the new order, there should be a waiting time of anywhere between 2-5 minutes. You should be able to check if it's ready by calling c1.ready? and have the program yell out the order and the misspelled name.

# You should be able to mark the coffee as collected with c1.collected = true.

# List all of the coffees not collected.

# Add options to the coffee order, eg shot of hazelnut, whipped cream, chocolate syrup.

# Extension 2
# Now do it with js.

require "Time"
require "pry"

class Coffee
	attr_reader :name

	def initialize(drink, sugar, size, name)
		@drink = drink
		@sugar = sugar
		@size = size
		@name = name
		@start_time = Time.now
		# @end_time = Time.now + rand(120..300)
		@end_time = Time.now + rand(5..10)
		@collected = false
	end	

	def to_s
		return "#{@name}'s #{@drink}, #{@size}, #{@sugar}"
	end

	def ready?
		if Time.now >= @end_time
			return "#{@name}'s #{@drink}, #{@size}, #{@sugar} is ready"
		else
			return "#{@name}'s #{@drink}, #{@size}, #{@sugar} is NOT ready!"
		end
	end

	def collected

	end
end

# c1 = Coffee.new('latte','2 sugars','medium','Darryl')
# c1.to_s

# c2 = Coffee.new('latte','0 sugars','large','John')
# c2.to_s
# c1.ready?
# binding.pry

order = true
coffee_orders = {}

while order do
	# ask for order, set timer
	print "Coffee order: "
	coffee = gets.chomp
	print "Sugar: "
	sugar = gets.chomp
	print "Coffee size: "
	size = gets.chomp
	print "Name: "
	name = gets.chomp
	coffee_orders[name] = Coffee.new(coffee, sugar, size, name)

	while command != "order"
		print "Check if an order is ready (name.ready?), see the list of orders (list), order again (order)"
		command = gets.chomp
		# binding.pry
		if command.downcase.include? ".ready?"
			# binding.pry
			order_name = command.gsub(".ready?", "")
			puts coffee_orders[order_name].ready?
			binding.pry
		elsif command.downcase == "list" 
			coffee_orders.each do |name, order|
				puts order.to_s
				# binding.pry
			end
		end
	end
	# check if order is ready
	# hold a list of coffees on order
end


