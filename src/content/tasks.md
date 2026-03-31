## Task A: Forecasting (Train/Test)

**Objective:** Given historical observations up to time *t*, predict targets at *t + h* for fixed horizons.

- **1h ahead:** h = 60 minutes (4 steps of 15 minutes)
- **24h ahead:** h = 1440 minutes (96 steps of 15 minutes)

**Targets:** `energy_wh` and `cfp_g` (and optionally `records`).

### Subtask A.1: Missing/Invalid Signal Detection

For each 15-minute bucket, predict whether sustainability signals are valid versus missing/invalid (e.g., zero-filled or unavailable).

### Subtask A.2: Peak Detection

For each 15-minute bucket, predict whether the bucket corresponds to a peak event (extreme values), e.g., `energy_wh` or `cfp_g` above the 95th percentile.

## Task B: Forecast-Driven Sustainable Job Scheduling

**Objective:** Given a queue of pending jobs and site-level forecasts from Task A, decide when and where to dispatch each job during the test period. The goal is to improve one declared primary objective (energy, cfp, or makespan) while keeping remaining objectives under control.

A starter kit with the simulator, evaluation script, and baseline policies will be provided.
