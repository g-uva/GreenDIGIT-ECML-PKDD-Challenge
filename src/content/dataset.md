The released dataset contains **3 anonymised grid site time series** aggregated into 15-minute buckets spanning approximately 3.7 months of data. Derived hourly and daily aggregates are provided as sums of 15-minute buckets.

The public challenge dataset is available both in the GitHub repository and in the VRE folders. Both locations include aggregated granular data. The raw data is available only through the VRE because of its size.

The VRE provides a ready-to-use Jupyter Notebook environment for participants to work conveniently with the data and develop their models. It is available through the Challenge VRE button above and directly at [https://sobigdata.d4science.org/group/greendigit_pkdd2026_challenge/jupyterhub-at-google-cloud](https://sobigdata.d4science.org/group/greendigit_pkdd2026_challenge/jupyterhub-at-google-cloud).

| RI | Span (months) | Continuity (%) | Zero CFP (%) | Total records |
|---|---|---|---|---|
| site-ff5cef309f | 3.70 | 90.76 | 0.448 | 1,655,596 |
| site-f880433f03 | 3.70 | 88.56 | 0.720 | 3,720,821 |
| site-50e0be8242 | 3.70 | 85.68 | 0.464 | 2,107,556 |

**Data schema:**

- `bucket_15m`: start timestamp of the 15-minute aggregation bucket
- `records`: number of non-aggregated records ingested
- `energy_wh`: total energy in Wh aggregated over the 15-minute bucket
- `cfp_g`: total carbon footprint in gCO₂e aggregated over the 15-minute bucket
