# ##Getting Close

# You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in a park, but it has gotten so popular that many people want to join in. 
# One of your friends created an API. An API is a way us getting data from a service. for people to add items hidden in the park, but now you want to build an App to help people decide what to find in the park.

# You are given the following set of data as a result back from an API request and you want to sort those results in terms of proximity to the user of your site.

# var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
#           {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
#           {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
#           {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
#           {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
#           {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]
# Write a loop that takes some results and a current location, i.e. lat and long and returns the results in order of proximity to the currentLocation. Note: you should choose this current location.

require 'pry'

myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]

def proximity(results, currentLocation)
	
	results.each do |result_hash|
		lat1 = result_hash[:location][:lat]
		long1 = result_hash[:location][:long]
		lat2 = currentLocation[:lat]
		long2 = currentLocation[:long]
		result_hash[:distance] = distance_between_points(lat1, lat2, long1, long2)
	end

	return results.sort_by { |hash| hash[:distance] }
end

def distance_between_points(lat1, lat2, long1, long2)
	# earth radius in km
	earth_radius = 6371
	dLat = degreesToRadians(lat2 - lat1)
	dLong = degreesToRadians(long2 - long1)

	# haversine formula for calculating distances on a sphere
	a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2)
	c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

	# distance in km
	distance = earth_radius * c 
end

# converts degrees to radians
def degreesToRadians(deg)
	return deg * (Math::PI/180)
end

# current location Melbourne
location = { :lat => -37.8136, :long => 144.9631}
puts proximity(myResults, location)





