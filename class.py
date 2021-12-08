class Students:
	def __init__(self,name,age,grades):
		self.name=name
		self.age=age
		self.grades=grades

	def get_grades(self):
		return self.grades

	def get_name(self):
		return self.name

class Course:
	def __init__(self,name,max_number):
		self.name=name
		self.max_number=max_number
		self.students=[]

	def enroll_students(self,student_name):
		if len(self.students)<self.max_number:
			self.students.append(student_name)
			print('Success')
		return False

	def get_students(self):
		for data in self.students:
			print(data.name,end=" ,")

	def get_average(self):
		total= 0
		for data in self.students:
			total+=data.grades
		return total/len(self.students)

s1= Students('Kanhaiya',23,45)
s2= Students('ABC',23,41)
s3= Students('DEF',23,55)
s4= Students('GHI',23,65)

course = Course('Python',3);
course.enroll_students(s1)
course.enroll_students(s2)
course.enroll_students(s3)
course.enroll_students(s4)
print(course.get_average())

print(course.get_students())
