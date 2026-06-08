import styles from "./ComparisonSection.module.css";

export default function ComparisonSection() {
  return (
    <section className={styles.comparisonSection}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <h2 className={styles.heading}>Without SyntraFlow</h2>
          <ul className={styles.list}>
            <li>
              <span className={styles.iconCross}>✕</span>
              <div className={styles.textBlock}>
                <h3>Manual Attendance Logs</h3>
                <p>
                  Reliance on spreadsheets or outdated systems often leads to
                  discrepancies in leave tracking and shift attendance records.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.iconCross}>✕</span>
              <div className={styles.textBlock}>
                <h3>Error-Prone Payroll Processing</h3>
                <p>
                  Deductions must be manually added and calculated, increasing
                  the chance of miscalculations and employee disputes.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.iconCross}>✕</span>
              <div className={styles.textBlock}>
                <h3>No Real-Time Visibility</h3>
                <p>
                  Employees cannot preview or verify their payslips before
                  finalization; admins lack dashboards for live payroll status.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.iconCross}>✕</span>
              <div className={styles.textBlock}>
                <h3>Anxious and Reactive</h3>
                <p>
                  Having to work in &quot;last-minute&quot; mode causes huge
                  stress in key periods of the year.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className={`${styles.card} ${styles.cardHighlight}`}>
          <h2 className={styles.heading}>With SyntraFlow</h2>
          <ul className={styles.list}>
            <li>
              <span className={styles.iconCheck}>✔</span>
              <div className={styles.textBlock}>
                <h3>Smart Attendance &amp; Leave Management</h3>
                <p>
                  Clock-in/out tracking, partial unpaid leave approval, and
                  real-time calendar views help reduce manual errors and delays.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.iconCheck}>✔</span>
              <div className={styles.textBlock}>
                <h3>Dynamic Payroll with Auto Deductions</h3>
                <p>
                  Shift-based and leave deductions are calculated automatically
                  with system-generated notes shown on payslip previews.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.iconCheck}>✔</span>
              <div className={styles.textBlock}>
                <h3>Flexible Salary Element Handling</h3>
                <p>
                  Selective and bulk salary elements with preview options ensure
                  accuracy and adaptability in payroll cycles.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.iconCheck}>✔</span>
              <div className={styles.textBlock}>
                <h3>Complete Employee Lifecycle Control</h3>
                <p>
                  From onboarding to exit, the system supports scheduling,
                  policy management, and approvals with precision.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

