# Cybersec
# The 'penetration testing' team have obtained a file from a suspect's private machine... and the information is incriminating! The only problem is... your tracking software only accepts a particular format. Take the compromised file, and turn it into a format for your backend to process it.

# Text file with incriminating info:
# customer,product,cost per unit,units
# Alica Brereton,Marijuana,9.18,50
# William Kotai,ecstasy,19.12,20
# Joel Forro,heroin,91.16,5
# David Ernest,Methamphetamine,108.78,5
# David Ernest,cocaine,80,2
# Joel Forro,ecstasy,19.12,10
# Gabriella Hyde,Marijuana,9.18,10
# Gabriella Hyde,Methamphetamine,108.78,8
# Sample output of the format we want our data for processing:
# {  
#    'Alica Brereton':[  
#       {  
#          product:'Marijuana',
#          unitPrice:'9.18',
#          units:'50',
#          totalPrice:'459.00'
#       }
#    ],
#    'William Kotai':[  
#       {  
#          product:'ecstasy',
#          unitPrice:'19.12',
#          units:'20',
#          totalPrice:'382.40'
#       }
#    ],
#    'Joel Forro':[  
#       {  
#          product:'heroin',
#          unitPrice:'91.16',
#          units:'5',
#          totalPrice:'455.80'
#       },
#       {  
#          product:'ecstasy',
#          unitPrice:'19.12',
#          units:'10',
#          totalPrice:'191.20'
#       }
#    ],
#    'David Ernest':[  
#       {  
#          product:'Methamphetamine',
#          unitPrice:'108.78',
#          units:'5',
#          totalPrice:'543.90'
#       },
#       {  
#          product:'cocaine',
#          unitPrice:'80',
#          units:'2',
#          totalPrice:'160.00'
#       }
#    ],
#    'Gabriella Hyde':[  
#       {  
#          product:'Marijuana',
#          unitPrice:'9.18',
#          units:'10',
#          totalPrice:'91.80'
#       },
#       {  
#          product:'Methamphetamine',
#          unitPrice:'108.78',
#          units:'8',
#          totalPrice:'870.24'
#       }
#    ]
# }

require 'pry'
require 'json'

output = {}
File.readlines('data.txt').each do |line|
   line = line.split(',')
   customer = line[0]
   product = line[1]
   costPerUnit = line[2]
   units = line[3].strip # removes the \n character at the end
   total = sprintf "%.2f", (Float(line[2]) * Float(line[3])).round(2) # format string with 2 decimal places floating point

   output[customer] = [] if !output.has_key?(customer)
   data = {}
   data["product"] = product
   data["unitPrice"] = costPerUnit
   data["units"] = units
   data["totalPrice"] = total
   output[customer] << data
end

puts JSON.pretty_generate(output)







