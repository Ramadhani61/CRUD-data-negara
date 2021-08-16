<template>
  <div class="container">
  
    <form @submit.prevent="add">
      <div class="form-group">
         <input type="hidden" v-model="form.id">
      </div>
      <div class="form-group">
         <label for="pemesan">Negara</label>
         <input type="text" v-model="form.negara" class="form-control"   placeholder="Masukkan Nama">
      </div>
      <div class="form-group">
         <label for="pemesan">Bahasa</label>
         <input type="text" v-model="form.bahasa" class="form-control" placeholder="Masukkan Pesanan">
      </div>
        <div class="form-group">
         <label for="Gender">Gender</label>
         <input type="text" v-model="form.gender" class="form-control" placeholder="Masukkan Gender">
      </div>
      <br/>
      <br/>
      
      <button type="submit" v-show="!updateSubmit" class="btn btn-primary">Tambah</button>
      <button type="button" v-show="updateSubmit" @click="update(form)" class="btn btn-primary">Update</button>
      </form>




       <div class="table-responsive mt-2">
          <table class="table table-hover table-bordered">
              <thead>
                 <tr>
                 <th>Negara</th>
                 <th>Bahasa</th>
                 <th>gender</th>
                 <th>Aksi</th>
                 </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.negara }}</td>
                  <td>{{ user.bahasa }}</td>
                  <td>{{ user.gender }}</td>
                  <td class="text-center">
                    <button @click="edit(user)" class="btn btn-sm btn-primary mr-2">EDIT</button>
                   <button @click="del(user)" class="btn btn-sm btn-danger">HAPUS</button>
                  </td>
                </tr>
             </tbody>
         </table>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      form:{
      id:'',
      negara:'',
      bahasa:'',
      gender:''
      },
      users:'',
      updateSubmit:false
    }
  },
  mounted(){
    this.load()
  },
  methods:{
    load(){
      axios.get('http://localhost:3000/users').then(res=>{
        this.users=res.data //respon dimasukan ke users
      }).catch((err)=>{
        console.log(err);
      })
    },
    add(){
    axios.post('http://localhost:3000/users',this.form).then();
        this.load()
        this.form.negara='',
        this.form.bahasa='',
        this.form.gender=''
    },
    edit(user){
      this.updateSubmit=true
      this.form.id=user.id
      this.form.negara=user.negara
      this.form.bahasa=user.bahasa
      this.form.gender=user.gender
    },
    update(form){
      axios.put('http://localhost:3000/users/'+form.id,{negara:this.form.negara,bahasa:this.form.bahasa,gender:this.form.gender}).then();
        this.load()
        this.form.negara=''
        this.form.bahasa=''
        this.form.gender=''
        this.updateSubmit=false
        location.reload(this.add())
    },
    del(user){
      axios.delete('http://localhost:3000/users/'+user.id).then(); 
        this.load()
    
   
    }
  }
}


</script>



