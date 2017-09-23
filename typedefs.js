const typeDefs = [`
  scalar Date

  type Query {
    workout(_id: String): Workout
    workouts: [Workout]
  }

  type Mutation {
    upsertWorkout(workout: Workout): Workout
    removeWorkout(workoutId: String): Boolean
    upsertExercise(workoutId: String, exercise: Exercise): Workout
    removeExercise(workoutId: String): Workout
    upsertInstance(workoutId: String, exerciseName: String, instance: Instance): Workout
    removeInstance(WorkoutId: String, exerciseName: String, date: Date): Workout
  }œ

  type Workout {
    _id: String;
    name: String
    order: Integer
    lastWorkoutDate: Date
    exercises: [Exercise]
  }

  type Exercise {
    name: String
    images: [String]
    sets: Integer
    reps: String
    instances: [Instance]
  }

  type Instance {
    date: Date
    sets: [Set]
  }

  type Set {
    reps: Integer
    totalWeight: Integer
  }
`];