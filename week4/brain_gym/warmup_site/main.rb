require "sinatra"
require "sinatra/reloader"

get "/home" do
	erb(:home)	
end

get "/about_us" do
	erb(:about_us)
end

get "/contact_us" do
	erb(:contact_us)
end