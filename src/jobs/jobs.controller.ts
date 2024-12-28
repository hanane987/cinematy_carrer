import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Patch, 
    Param, 
    Delete,
    Request
  } from '@nestjs/common';
  import { JobsService } from './jobs.service';
  import { CreateJobDto } from './dto/job.dto';
  
  @Controller('jobs')
  export class JobsController {
    constructor(private readonly jobsService: JobsService) {}
  
    @Post()
    create(@Body() createJobDto: CreateJobDto, @Request() req) {
      return this.jobsService.create(createJobDto, req.user?.userId || 'system');
    }
  
    @Get()
    findAll() {
      return this.jobsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.jobsService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateJobDto: Partial<CreateJobDto>) {
      return this.jobsService.update(id, updateJobDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.jobsService.remove(id);
    }
  }