class Pet:
	total_no_pet=0
	def __init__(self,name,breed):

		self.name = name
		self.breed = breed
		Pet.total_no_pets();

	def show(self):
		print(f'My name is {self.name} and my breed is {self.breed}');

	@classmethod
	def total_no_pets(cls):
		cls.total_no_pet +=1;
class Cat(Pet):
	def __init__(self,name,breed,type):
		super().__init__(name,breed)
		self.type=type

	def speak(self):
		print('Meow')

	def showcategory(self):
		print(self.type)

class Dog(Pet):
	# """docstring for Dog"""
	# def __init__(self, arg):
	# 	super(Dog, self).__init__()
	# 	self.arg = arg
	def speak(self):
		print('Bark')
		


cat1 = Cat('tom','loopa','Cat')
dog1 = Dog('tomy','german')
cat1.showcategory()
dog1.speak()

print(Pet.total_no_pet)

