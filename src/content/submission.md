## Awards

- **1st place:** ECML-PKDD registration and travel expenses for one representative.
- **2nd place:** ECML-PKDD registration for one representative.
- **3rd place:** ECML-PKDD registration for one representative.
- Interview published in a blog post and a dedicated page on the next SoBigData Magazine and formal recognition.
- Outstanding participants may also be considered for inclusion in a joint publication describing the challenge outcomes.

For two-person teams, the prize covers conference registration and/or travel expenses for one team representative only.

## Registration

1. Fill in the [Registration Form](https://forms.gle/iTw89KPXiELYNndn9).
2. Register in the SoBigData platform (an email will be sent, access will be given on **May 1st**).
2. Get access to the VRE for the materials and computation resources.
3. Submit your abstract.
4. Evaluation, approval, and camera-ready version.

## Submission

All participants are required to submit the complete code used in their solution, and the code must be executable on the data provided for the challenge.

Submissions must include:

- All necessary pre-processing steps
- A complete specification of libraries, dependencies, and tools
- A final report (max 4 pages) describing the process and results
- Supporting materials sent to **PKDDchallenge@SoBigData.eu** before the deadline

**Reproducibility requirement (mandatory):** Submissions must be runnable end-to-end by organisers. Non-runnable submissions are disqualified regardless of leaderboard score.

The main submission platform is EasyChair. The "Final Submission" button above will be made available in the last week of the challenge.

## Submission Guidelines

Participants should submit their final solution by email as a ZIP file containing the complete submission repository.

Submissions should be sent to: [PKDDChallenge@SoBigData.eu](mailto:PKDDChallenge@SoBigData.eu)

For submission-related questions, participants may also contact: [g.j.teixeiradepinhoferreira@uva.nl](mailto:g.j.teixeiradepinhoferreira@uva.nl)

The ZIP file should include all source code, configuration files, dependency specifications, and instructions required to reproduce the submitted results.

Participants are expected to use the official challenge repository as the starting point and preserve the expected structure, interfaces, and evaluation workflow. They may extend the repository with their own model code, dependencies, and documentation.

The official evaluation code must remain unchanged. Participants may modify or extend the model implementation, preprocessing, training, and inference code, provided that the expected input/output format used by the evaluation pipeline is preserved.

If the submission file is too large to be sent by email, participants should contact the organising team in advance so that an alternative upload method can be arranged.

Each submission must include a README.md file with the following section:

```
## Submission <team_name>
### Participants
| Name          | Email                                                 | Affiliation                |
| ------------- | ----------------------------------------------------- | -------------------------- |
| Participant 1 | [participant@email.com](mailto:participant@email.com) | Institution / Organisation |
| Participant 2 | [participant@email.com](mailto:participant@email.com) | Institution / Organisation |

### Reproducibility
Please provide the commands required to reproduce the submission.

#### Training
Provide the command used to train the model using the provided public training/development data.
Example:
python train.py --data path/to/public/training/data --output path/to/model

#### Testing / Inference
Provide the command used to run the trained model on a test dataset.
The testing command must allow the organising team to specify the path to the private test dataset used for final evaluation.
Example:
python test.py --model path/to/model --test-data path/to/private/test/data --output path/to/predictions
```
Submissions should be fully reproducible by the organising team using the provided instructions.
