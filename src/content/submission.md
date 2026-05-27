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
3. Get access to the VRE for the materials and computation resources.
4. Submit your solution by ~~1s June 2026~~ 7th June 2026 (**firm**).
5. Evaluation, approval, and camera-ready version.


## Submission Guidelines
| ⚠️ ⚠️ <ins>**Submissions must be made through the [submission form](https://forms.gle/4z1itungej5HEkLW9).**</ins> ⚠️ ⚠️

Participants should submit their final solution through the submission form. 
The submission must include the complete repository (`repository.zip`) and a final report (`report.pdf`) of up to 4 pages.

- The repository should include all source code, configuration files, dependency specifications, and instructions required to reproduce the submitted results.
- Participants are expected to use the official challenge repository as the starting point and preserve the expected structure, interfaces, and evaluation workflow. They may extend the repository with their own model code, dependencies, and documentation.

For questions about the submission process, participants should contact the organising team in advance  [PKDDChallenge@SoBigData.uva](mailto:PKDDChallenge@SoBigData.uva).

Each submission must include a README.md file with the following section:

```
## Submission <team_name>
### Participants
| Name          | Email                                                 | Affiliation                |
| ------------- | ----------------------------------------------------- | -------------------------- |
| Participant 1 | participant1@email.com                                | Institution / Organisation |
| Participant 2 | participant2@email.com                                | Institution / Organisation |

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
