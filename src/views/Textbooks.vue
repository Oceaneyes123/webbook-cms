<template>
  <v-app style="width:100%">
    <div class="blue--text">Textbooks</div>
    <v-container>
      <v-row>
        <v-col cols="9">
          <v-row>
            <div>CURRICULUM</div>
            <v-spacer></v-spacer>
            <v-col cols="3">
              <v-text-field outlined dense we>
                <template v-slot:append>
                  <v-icon color="blue">search</v-icon>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
          <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in courses" :key="i">
              <v-expansion-panel-header>{{
                item.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-expansion-panels>
                  <v-expansion-panel
                    v-for="(course, j) in item.subcourses"
                    :key="j"
                  >
                    <v-expansion-panel-header>{{
                      course.subcourse
                    }}</v-expansion-panel-header>
                    <v-expansion-panel-content></v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="3">
          <div class="text--secondary mb-6 mt-5">CREATE</div>
          <v-card color="#ECFBFF" class="mb-10">
            <v-container>
              <v-row align="center" justify="center">
                <v-col>
                  <v-btn block class="white--text" color="#00ABDA"
                    >+ CURRICULUM</v-btn
                  >
                </v-col>
                <v-col>
                  <v-btn block class="white--text" color="#00ABDA"
                    >+ SERIES</v-btn
                  >
                </v-col>
                <v-col>
                  <v-btn block class="white--text" color="#00ABDA"
                    >+ TEXTBOOK</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <div class="text--secondary mb-3 mt-5">IMPORTANT !!</div>
          <v-card color="#ECFBFF" height="100%"></v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="curriculumDialog" max-width="600">
      <v-card class="pa-5">
        <div class="blue--text">ADD NEW CURRICULUM</div>
        <v-container>
          <div class="text--secondary">Title</div>
          <v-row>
            <v-col cols="6">
              <v-text-field outlined label="EN" dense></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined label="KR" dense></v-text-field>
            </v-col>
          </v-row>
          <div class="text--secondary">Applicable Level/s</div>
          <v-row>
            <v-col cols="6">
              <v-select :items="levels" outlined dense label="From"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select :items="levels" outlined dense label="To"></v-select>
            </v-col>
          </v-row>
          <div class="text--secondary">Description</div>
          <v-row>
            <v-col cols="6">
              <v-textarea outlined dense label="EN"></v-textarea>
            </v-col>
            <v-col cols="6">
              <v-textarea outlined dense label="KR"></v-textarea>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn
              color="grey"
              outlined
              class="mr-3"
              @click="curriculumDialog = false"
              >Cancel</v-btn
            >
            <v-btn color="#00ABDA" class="white--text">Submit</v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          title: "Introductory Course",
          subcourses: [
            {
              subcourse: "Phonics"
            },
            {
              subcourse: "Advance Phonics"
            },
            {
              subcourse: "Pattern Course Junior"
            },
            {
              subcourse: "Conversation Course Junior"
            }
          ]
        },
        {
          title: "Elementary/Intermediate Conversation Course",
          subcourses: [
            {
              subcourse: "Milestone"
            },
            {
              subcourse: "First Step in Conversation"
            }
          ]
        },
        {
          title: "New York Live English"
        },
        {
          title: "Grammar Pattern Course",
          subcourses: [
            {
              subcourse: "Speaking Pattern Drill"
            },
            {
              subcourse: "Pattern Practice Adult"
            }
          ]
        },
        {
          title: "Discussion/Free Talking",
          subcourses: [
            {
              subcourse: "English Conversation Situation Training"
            },
            {
              subcourse: "English Convesation Training Pattern Drill"
            },
            {
              subcourse: "English Convesation Training Verb Drill"
            },
            {
              subcourse: "BIZ"
            },
            {
              subcourse: "Freetalking Adult"
            }
          ]
        },
        {
          title: "English Newspapaer Course"
        },
        {
          title: "Business",
          subcourses: [
            {
              subcourse: "Business English (Situational Dialogues)"
            },
            {
              subcourse: "Email, Meeting, Negotiation, Presentation"
            },
            {
              subcourse: "Business English (Discussion and Analysis)"
            }
          ]
        },
        { title: "Pattern Practice" },
        {
          title: "Job Preparation/Specialization Course",
          subcourses: [
            {
              subcourse: "Specialized Job Preparation Course"
            }
          ]
        }
      ]
    };
  }
};
</script>
