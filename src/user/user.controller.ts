import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "src/dto/create-user.dto";
import { UpdatePatchUserDTO } from "src/dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "src/dto/update-put-user.dto";


@Controller('users')
export class UserController{
    
    @Post()
    async create(@Body() {name, email, password}: CreateUserDTO) {
        return {
            name,
            email,
            password
        }
    }

    @Get()
    async read() {
        return {users: []}
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id) {
        return {user: {}, id}
    }

    @Put(':id')
    async update(@Body() {name, email, password}: UpdatePutUserDTO, @Param('id', ParseIntPipe) id){
        return {
            method: 'put',
            name, 
            email, 
            password,
            id
        }
    }

    @Patch(':id')
    async partialUpdate(@Body() {name, email, password}: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id){
        return {
            method: 'patch',
            name, 
            email, 
            password,
            id
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id){
        return {
            id
        }
    }
}