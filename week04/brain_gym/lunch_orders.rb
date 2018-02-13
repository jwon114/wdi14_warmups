# Lunch Orders
# It's approaching lunch hour… let's collect orders. Create a new file called lunch_orders.rb to complete this exercise.

# Create a program that collects lunch orders. Prompt:
# Name for order: (enter name)
# {name} wants to order: (enter item)
# Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
# Example: Greg can order a Burger, and then add Fries to his order later.
# After storing data, prompt the user with:
# Add another item to the order? (y/n)
# Repeat steps 1 & 2 if the answer is "y"
# After the user completes adding orders, print out:
# "All orders: {order data}"
# Keep going...
# Rather than printing out a blob of raw lunch order data, print each name's orders on a separate line, formatted as one of the following:

# "Greg ordered a sandwich"
# "Peter ordered a burger & fries"
# "Travis ordered a salad, apple & water"
# You may have to do some hunting in Ruby docs!

require "pry"

orders = {}

no_orders = false

while !no_orders do

	print "Name for order: "
	name = gets.chomp

	print "#{name} wants to order: "
	order = gets.chomp

	# add order to the list
	if !orders.key?(name)
		orders[name] = [order]
	else
		orders[name].push(order)
	end

	print "Add another item to the order? (y/n)"
	add_another_item = gets.chomp

	if add_another_item.downcase == "n"
		no_orders = true
	end
end

def print_orders(orders)
	orders.each do | name, order |
		order_list = []
		order.each do | item |
			order_list.push(item)   
		end

		if order_list.length > 2
			order_list = order_list.join(", ")
			order_list[order_list.rindex(", ")] = " &"
			puts "#{name} ordered #{order_list}"
		else
			puts "#{name} ordered #{order_list.join(" & ")}"
		end
	end
end
	
print_orders(orders)
