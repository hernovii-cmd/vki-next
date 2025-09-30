'use client';

import useStudens from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentsInterface';
import styles from './Students.module.scss';

const Student = (): React.ReactElement => {
  const { students } = useStudens();

  return (
    <div className={styles.Students}>
      {students.map((student: StudentInterface) => (
        <h2 key={student.id}>
          {student.first_name}
          {student.last_name}
          {student.middle_name}
          {student.groupId}
        </h2>
      ))}
    </div>
  );
};

export default Student;
